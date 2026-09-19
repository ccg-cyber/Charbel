export type ActiveTab = 'profile' | 'status_poster' | 'match_recap';

export type FilterStyle = 'arena' | 'crimson' | 'noir' | 'gold';

export interface PlayerStats {
  jerseyNumber: string;
  fullName: string;
  nickname: string;
  team: string;
  teamColors: string;
  matchDate: string;
  matchTime: string;
  matchLocation: string;
  champsScore: number;
  opponentName: string;
  opponentScore: number;
  motto: string;
  proudNote: string;
}
