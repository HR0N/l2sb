import moment from "moment";
import trim from "validator/es/lib/trim";

class Time {
    now = () => {
        let a = moment([2022, 8, 22, 17, 0]);
        let b = moment();
        // console.log(a.format("DD.MM.YYYY | H:mm"));
        // console.log(a.diff(a));
    };
    ast_format_refactoring = str => {
        let data = {boss: str.split('Убит босс ').at(-1)};
        // console.log(data);
    };
    get_Time_format = str => {
        let date = str.split(' ')[0].split('-');
        let time = str.split(' ')[1].split(':');
        let result = [date[0], +date[1] - 1, date[2], ...time];
        // console.log(moment(result).unix());
        // console.log(moment(result).format("DD.MM.YYYY | H:mm"));
        console.log(moment.unix(moment(new Date).unix()).format("DD.MM.YYYY | H:mm"));
    };
};

export default Time;