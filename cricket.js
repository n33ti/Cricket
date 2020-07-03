var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Team {
    constructor(teamName) {
        this.team = [];
        this.TeamName = teamName;
        for (let i = 0; i < 10; i++)
            this.team.push(0);
        this.totalScore = 0;
    }
    updateScore() {
        for (let i = 0; i < 10; i++)
            this.totalScore = this.team[i] + this.totalScore;
    }
}
let tA = new Team("TeamA");
let tB = new Team("TeamB");
let dis = false;
let promise;
const updatedis = function () {
    dis = true;
    console.log("clicked")
};
const f = function () {
    return __awaiter(this, void 0, void 0, function* () {
        promise = new Promise((resolve, reject) => {
            if (dis) {
                resolve(
                    {
                        message: "clicked"
                    }
                );
               
            }
        });
        let res = yield promise;
    });
};
const play = function (t) {
    console.log("Team " + t.TeamName);
    for (let i = 0; i < 10; i++) {
        for (let a = 0; a < 6; a++) {
            var sum;
            f().then()
            {
               
                 sum = 0;
                let score = Math.floor((Math.random() * 11));
                if (score > 0) {
                    sum = sum + score;
                }
                else
                    break;
           
              }
           
          
        }
        console.log(sum);
        t.team[i] = sum;
    }
    t.updateScore();
    console.log(t.totalScore);
};
play(tA);
play(tB);
