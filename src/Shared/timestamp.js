export default class TimeStamp {
    static convertDate(posted) {
        var postedTime = new Date(posted);
        var currentTime = new Date();
        var timeDiff = currentTime - postedTime;
        var timeString = " ago";

        var secDiff = Math.floor(timeDiff / 1000);
        if(secDiff <= 60) {
            timeString = secDiff.toString()+"s ago"
        } else {
            var minDiff = Math.floor(timeDiff / 1000 / 60);
            if(minDiff <= 60) {
                timeString = minDiff.toString()+"m ago"
            } else {
                var hourDiff=  Math.floor(timeDiff / 1000 / 3600);
                
                if (hourDiff <= 24) {
                    timeString = hourDiff.toString() 
                    if (hourDiff > 1){
                        timeString+=" HOURS AGO";
                    } else{
                        timeString+=" HOUR AGO";
                    }
                } else {
                    var dayDiff = Math.floor(hourDiff/24);
                    if (dayDiff <=7) {
                        timeString = dayDiff.toString();
                        if (dayDiff > 1){
                            timeString+=" DAYS AGO";
                        } else{
                            timeString+=" DAY AGO";
                        }
                    } else {
                        var options = { year : 'numeric', month: 'long', day : 'numeric' }
                        timeString = postedTime.toLocaleDateString('en-US',options)
                    }   
                }
            }
        }
        // this.setState({
        //     timePosted : timeString
        // })
        return timeString
    }
}