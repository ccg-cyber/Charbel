import { FilterStyle } from '../types';

export async function generatePosterCanvas(
  playerImage: string | null,
  selectedFilter: FilterStyle,
  customQuote: string
): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // 1. Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
  if (selectedFilter === 'crimson') {
    bgGrad.addColorStop(0, '#1a0505');
    bgGrad.addColorStop(0.4, '#2d0a0a');
    bgGrad.addColorStop(1, '#080101');
  } else if (selectedFilter === 'gold') {
    bgGrad.addColorStop(0, '#1c1708');
    bgGrad.addColorStop(0.4, '#2a220c');
    bgGrad.addColorStop(1, '#0a0802');
  } else if (selectedFilter === 'noir') {
    bgGrad.addColorStop(0, '#141414');
    bgGrad.addColorStop(0.5, '#0a0a0a');
    bgGrad.addColorStop(1, '#020202');
  } else {
    // Arena default
    bgGrad.addColorStop(0, '#0a0d14');
    bgGrad.addColorStop(0.35, '#121019');
    bgGrad.addColorStop(0.7, '#1f0d14');
    bgGrad.addColorStop(1, '#050308');
  }
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1920);

  // Stadium spotlight beams
  const beam1 = ctx.createRadialGradient(200, 100, 50, 400, 600, 800);
  beam1.addColorStop(0, 'rgba(239, 68, 68, 0.25)');
  beam1.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = beam1;
  ctx.fillRect(0, 0, 1080, 1920);

  const beam2 = ctx.createRadialGradient(880, 200, 50, 700, 700, 700);
  beam2.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
  beam2.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = beam2;
  ctx.fillRect(0, 0, 1080, 1920);

  // Hardwood court three-point line at bottom
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.2)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(540, 1750, 400, Math.PI, 2 * Math.PI);
  ctx.stroke();

  // Top Subheader
  ctx.fillStyle = '#ef4444';
  ctx.font = '900 24px Montserrat, sans-serif';
  ctx.letterSpacing = '6px';
  ctx.textAlign = 'center';
  ctx.fillText('CHAMPS BASKETBALL CLUB • YOUTH LEAGUE', 540, 110);

  // Scoreboard Container
  ctx.fillStyle = 'rgba(15, 15, 20, 0.88)';
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(140, 140, 800, 200, 24);
  ctx.fill();
  ctx.stroke();

  // Scoreboard Header
  ctx.fillStyle = '#9ca3af';
  ctx.font = '700 20px Montserrat, sans-serif';
  ctx.fillText('FINAL MATCH RESULT • 19 SEP 2026', 540, 185);

  // Team Champs
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 44px "Bebas Neue", Montserrat, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('CHAMPS', 200, 260);

  ctx.fillStyle = '#ef4444';
  ctx.font = '900 76px "Bebas Neue", Montserrat, sans-serif';
  ctx.fillText('47', 410, 270);

  // VS Divider
  ctx.fillStyle = '#6b7280';
  ctx.font = '700 26px Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VS', 540, 255);

  // A Team
  ctx.fillStyle = '#38bdf8';
  ctx.font = '900 76px "Bebas Neue", Montserrat, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('25', 670, 270);

  ctx.fillStyle = '#9ca3af';
  ctx.font = '900 44px "Bebas Neue", Montserrat, sans-serif';
  ctx.fillText('A TEAM', 880, 260);

  // Victory badge ribbon
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.roundRect(380, 298, 320, 32, 16);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 16px Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('★ OFFICIAL MATCH VICTORY ★', 540, 320);

  // 3. Central Photo or Athletic Silhouette Frame
  const cardX = 160;
  const cardY = 370;
  const cardW = 760;
  const cardH = 960;
  const cardRadius = 36;

  ctx.save();
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
  ctx.clip();

  if (playerImage) {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = playerImage;
      });

      // Cover scaling
      const imgRatio = img.width / img.height;
      const targetRatio = cardW / cardH;
      let drawW = cardW;
      let drawH = cardH;
      let offX = cardX;
      let offY = cardY;

      if (imgRatio > targetRatio) {
        drawW = cardH * imgRatio;
        offX = cardX - (drawW - cardW) / 2;
      } else {
        drawH = cardW / imgRatio;
        offY = cardY - (drawH - cardH) / 2;
      }

      ctx.drawImage(img, offX, offY, drawW, drawH);

      // Color filter tint
      if (selectedFilter === 'crimson') {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
        ctx.fillRect(cardX, cardY, cardW, cardH);
      } else if (selectedFilter === 'gold') {
        ctx.fillStyle = 'rgba(234, 179, 8, 0.12)';
        ctx.fillRect(cardX, cardY, cardW, cardH);
      } else if (selectedFilter === 'noir') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(cardX, cardY, cardW, cardH);
      }
    } catch {
      drawVectorCharbel(ctx, cardX, cardY, cardW, cardH);
    }
  } else {
    drawVectorCharbel(ctx, cardX, cardY, cardW, cardH);
  }
  ctx.restore();

  // Card Outer Glow & Border
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
  ctx.stroke();

  // Jersey #22 badge tag inside photo
  ctx.fillStyle = '#dc2626';
  ctx.beginPath();
  ctx.roundRect(cardX + 30, cardY + 30, 110, 60, 16);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 38px "Bebas Neue", Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('#22', cardX + 85, cardY + 74);

  // 4. Player Name Title
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 72px "Bebas Neue", Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CHARBEL GEAGEA', 540, 1400);

  ctx.fillStyle = '#ef4444';
  ctx.font = '900 32px Montserrat, sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('“THE LEGACY”', 540, 1445);

  // 5. Quote Box
  ctx.fillStyle = 'rgba(15, 15, 20, 0.9)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(140, 1485, 800, 175, 24);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#f87171';
  ctx.font = 'italic 700 30px Montserrat, sans-serif';
  ctx.fillText(`“${customQuote}”`, 540, 1550);

  ctx.fillStyle = '#9ca3af';
  ctx.font = '700 18px Montserrat, sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('FOCUS • DISCIPLINE • CONFIDENCE • TEAMWORK', 540, 1610);

  // 6. Match Details Footer
  ctx.fillStyle = '#d1d5db';
  ctx.font = '700 22px Montserrat, sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText('SAT 19 SEP 2026 • 12:00 – 13:30 • CHAMPS ARENA', 540, 1730);

  ctx.fillStyle = '#ef4444';
  ctx.font = '900 24px Montserrat, sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('Ci • CRISPIN INTELLIGENCE ATHLETE PROFILE', 540, 1785);

  return canvas.toDataURL('image/png', 0.95);
}

function drawVectorCharbel(
  ctx: CanvasRenderingContext2D,
  cardX: number,
  cardY: number,
  cardW: number,
  cardH: number
) {
  // Dark court backdrop
  const grad = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardH);
  grad.addColorStop(0, '#1e1b4b');
  grad.addColorStop(0.5, '#09090b');
  grad.addColorStop(1, '#18181b');
  ctx.fillStyle = grad;
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Rim back-light
  const centerRing = ctx.createRadialGradient(cardX + cardW / 2, cardY + 280, 20, cardX + cardW / 2, cardY + 280, 260);
  centerRing.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
  centerRing.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = centerRing;
  ctx.beginPath();
  ctx.arc(cardX + cardW / 2, cardY + 280, 260, 0, Math.PI * 2);
  ctx.fill();

  // Boy's head & face
  const cx = cardX + cardW / 2;
  const cy = cardY + 280;

  ctx.fillStyle = '#f6d8b8';
  ctx.beginPath();
  ctx.ellipse(cx, cy, 100, 120, 0, 0, Math.PI * 2);
  ctx.fill();

  // Short light brown athletic hair
  ctx.fillStyle = '#7c4a24';
  ctx.beginPath();
  ctx.arc(cx, cy - 35, 105, Math.PI, 2 * Math.PI);
  ctx.fill();

  // Determined eyes
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.arc(cx - 32, cy - 5, 7, 0, Math.PI * 2);
  ctx.arc(cx + 32, cy - 5, 7, 0, Math.PI * 2);
  ctx.fill();

  // Smile
  ctx.strokeStyle = '#9a3412';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy + 40, 30, 0.2, Math.PI - 0.2);
  ctx.stroke();

  // Champs Black & Red Jersey
  ctx.fillStyle = '#0a0a0a';
  ctx.beginPath();
  ctx.moveTo(cx - 150, cy + 120);
  ctx.lineTo(cx + 150, cy + 120);
  ctx.lineTo(cx + 200, cardY + cardH);
  ctx.lineTo(cx - 200, cardY + cardH);
  ctx.closePath();
  ctx.fill();

  // Red Side Panels
  ctx.fillStyle = '#dc2626';
  ctx.beginPath();
  ctx.moveTo(cx - 150, cy + 120);
  ctx.lineTo(cx - 100, cy + 120);
  ctx.lineTo(cx - 130, cardY + cardH);
  ctx.lineTo(cx - 200, cardY + cardH);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cx + 100, cy + 120);
  ctx.lineTo(cx + 150, cy + 120);
  ctx.lineTo(cx + 200, cardY + cardH);
  ctx.lineTo(cx + 130, cardY + cardH);
  ctx.closePath();
  ctx.fill();

  // White borders
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.stroke();

  // CHAMPS on Jersey
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 58px "Bebas Neue", Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CHAMPS', cx, cy + 220);

  // Big 22 on Jersey
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 5;
  ctx.font = '900 140px "Bebas Neue", Montserrat, sans-serif';
  ctx.strokeText('22', cx, cy + 370);
  ctx.fillText('22', cx, cy + 370);

  // Basketball
  const ballX = cx - 110;
  const ballY = cardY + cardH - 120;
  const ballR = 90;
  const bGrad = ctx.createRadialGradient(ballX - 20, ballY - 20, 10, ballX, ballY, ballR);
  bGrad.addColorStop(0, '#fb923c');
  bGrad.addColorStop(0.8, '#c2410c');
  bGrad.addColorStop(1, '#7c2d12');
  ctx.fillStyle = bGrad;
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#1c1917';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ballX - ballR, ballY);
  ctx.lineTo(ballX + ballR, ballY);
  ctx.moveTo(ballX, ballY - ballR);
  ctx.lineTo(ballX, ballY + ballR);
  ctx.stroke();
}
