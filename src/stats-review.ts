import { Rate } from "./rate";

interface StatsProps {
    goals: number,
    goals_missed: number,
    passes: number,
    assists: number
}

const pass_threshold = 0.05;
const goals_threshold = 1;
const goals_missed_threshold = -0.6;
const assist_threshold = 0.6;

export class StatsReviewer {

    public review(data: StatsProps): object {
        const { goals, goals_missed, passes, assists } = data;

        let rate = new Rate();

        rate.setAssistsBonus(passes * pass_threshold);
        rate.setGoalsBonus(goals * goals_threshold);
        rate.setGoalsMissedOnus(goals_missed * goals_missed_threshold);
        rate.setAssistsBonus(assists * assist_threshold);

        return { rate };
    }
}