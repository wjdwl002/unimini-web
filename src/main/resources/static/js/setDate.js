const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
        const now = new Date();
        const tomorrow = new Date();
        const tomorrow2 = new Date();
        const tomorrow3 = new Date();
        const tomorrow4 = new Date();
        const tomorrow5 = new Date();
        const yesterday = new Date();
        tomorrow.setDate(new Date().getDate() + 1);
        tomorrow2.setDate(new Date().getDate() + 2);
        tomorrow3.setDate(new Date().getDate() + 3);
        tomorrow4.setDate(new Date().getDate() + 4);
        tomorrow5.setDate(new Date().getDate() + 5);
        yesterday.setDate(new Date().getDate() - 1);
        const nowDate = now.getDate();
        const nowDay = now.getDay();
        const nowMonth = now.getMonth();
        const nowHour = (now.getMinutes()>30 ? (now.getHours()+1 == 13 ? 1 : now.getHours()+1) : now.getHours());
        const nowMin = (now.getMinutes()<=30 ? 30 : "00");
        const nextHour = (nowHour+1 == 13 ? 1 : nowHour+1);
        const mingleStartTimeHour = document.getElementById("mingleStartTimeHour");
        const mingleStartTimeMin = document.getElementById("mingleStartTimeMin");
        const mingleEndTimeHour = document.getElementById("mingleEndTimeHour");
        const mingleEndTimeMin = document.getElementById("mingleEndTimeMin");
        mingleStartTimeHour.innerHTML = nowHour;
        mingleStartTimeMin.innerHTML = nowMin;
        mingleEndTimeHour.innerHTML = nextHour;
        mingleEndTimeMin.innerHTML = nowMin;
        document.getElementById("day-1").innerHTML = WEEKDAY[yesterday.getDay()];
        document.getElementById("day+1").innerHTML = WEEKDAY[tomorrow.getDay()];
        document.getElementById("day+2").innerHTML = WEEKDAY[tomorrow2.getDay()];
        document.getElementById("day+3").innerHTML = WEEKDAY[tomorrow3.getDay()];
        document.getElementById("day+4").innerHTML = WEEKDAY[tomorrow4.getDay()];
        document.getElementById("day+5").innerHTML = WEEKDAY[tomorrow5.getDay()];
        document.getElementById("date-1").innerHTML = yesterday.getDate();
        document.getElementById("date+1").innerHTML = tomorrow.getDate();
        document.getElementById("date+2").innerHTML = tomorrow2.getDate();
        document.getElementById("date+3").innerHTML = tomorrow3.getDate();
        document.getElementById("date+4").innerHTML = tomorrow4.getDate();
        document.getElementById("date+5").innerHTML = tomorrow5.getDate();
    