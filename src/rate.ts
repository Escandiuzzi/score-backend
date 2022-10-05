export class Rate {

    private rate = 6;
    private pass_bonus = 0;
    private goals_bonus = 0;
    private goals_missed_onus = 0; 
    private assists_bonus = 0;

    public setPassBonus(pass_bonus: number) {
        this.pass_bonus = pass_bonus;
        this.rate += this.pass_bonus;
    }

    public setGoalsBonus(goals_bonus: number) {
        this.goals_bonus = goals_bonus;
        this.rate += this.goals_bonus;
    }

    public setGoalsMissedOnus(goals_missed_onus: number) {
        this.goals_missed_onus = goals_missed_onus;
        this.rate += this.goals_missed_onus;
    }

    public setAssistsBonus(assists_bonus: number) {
        this.assists_bonus = assists_bonus;
        this.rate += this.assists_bonus;
    }
}