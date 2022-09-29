import moment from "moment";

class Time {
    aster_Time_format_to_l2sb = str => {
        let date = str.split(' ')[0].split('-');
        let time = str.split(' ')[1].split(':');
        let result = [date[0], +date[1] - 1, date[2], ...time];
        // console.log(moment(result).unix());
        // console.log(moment(result).format("DD.MM.YYYY | H:mm"));
        // console.log(moment.unix(moment(new Date).unix()).format("DD.MM.YYYY | H:mm"));
        // console.log(moment(result).format("DD.MM.YYYY | H:mm"));
        return moment(result).format("DD.MM.YYYY - H:mm");
    };
    new_Date_format_to_l2sb = obj => {
        let unix = moment(obj).unix();
        return moment.unix(unix).format("DD.MM.YYYY - H:mm");
    };
    compare_dateTime_formats = (ast_date, new_date = new Date())=>{
        let killed       = moment(ast_date);
        let time_now     = moment(new_date);
        let passed       = moment.duration(time_now.diff(killed));
        let start        = moment(killed).add(18, 'hours');
        let finish       = moment(killed).add(30, 'hours');
        let difference   = finish.diff(time_now);
        let difference2  = start.diff(time_now);
        let begun        = time_now.diff(start) > 0;


        return {
            passed:
                [
                    Math.ceil(passed.days()),
                    Math.ceil(passed.hours()),
                    Math.ceil(passed.minutes()),
                ],
            start: start.format("DD.MM.YYYY - H:mm").split(' - '),
            finish: finish.format("DD.MM.YYYY - H:mm").split(' - '),
            // between resp now & expired
            difference: [Math.ceil(moment.duration(difference).asMinutes()), moment.utc(difference).format("H:mm")],
            // between resp finish and start
            difference2: [Math.ceil(moment.duration(difference2).asMinutes()), moment.utc(difference2).format("H:mm")],
            begun: begun,
        };
    };
};

export default Time;