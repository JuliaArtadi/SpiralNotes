export const PhaseIndex = (phase, date) => {
    const day = phase[date.getDate()];
    if (day.phaseName === "Nowy księżyc") {
        return 0;
    } else if (day.phaseName === "Przybywający" && day.lighting >= 0 && day.lighting <= 3) {
        return 1;
    } else if (day.phaseName === "Przybywający" && day.lighting > 3 && day.lighting <= 8) {
        return 2;
    } else if (day.phaseName === "Przybywający" && day.lighting > 8 && day.lighting <= 16) {
        return 3;
    } else if (day.phaseName === "Przybywający" && day.lighting > 16 && day.lighting <= 25) {
        return 4;
    } else if (day.phaseName === "Przybywający" && day.lighting > 25 && day.lighting <= 35) {
        return 5;
    } else if (day.phaseName === "Przybywający" && day.lighting > 35 && day.lighting <= 50) {
        return 6;
    } else if (day.phaseName === "Pierwszy kwartał") {
        return 7;
    } else if (day.phaseName === "Przybywający" && day.lighting >= 50 && day.lighting <= 65) {
        return 8;
    } else if (day.phaseName === "Przybywający" && day.lighting > 65 && day.lighting <= 75) {
        return 9;
    } else if (day.phaseName === "Przybywający" && day.lighting > 75 && day.lighting <= 84) {
        return 10;
    } else if (day.phaseName === "Przybywający" && day.lighting > 84 && day.lighting <= 92) {
        return 11;
    } else if (day.phaseName === "Przybywający" && day.lighting > 92 && day.lighting <= 97) {
        return 12;
    } else if (day.phaseName === "Przybywający" && day.lighting > 97 && day.lighting <= 100) {
        return 13;
    } else if (day.phaseName === "Księżyc w pełni") {
        return 14;
    } else if (day.phaseName === "zanikający" && day.lighting >= 97 && day.lighting <= 100) {
        return 15;
    } else if (day.phaseName === "zanikający" && day.lighting >= 92 && day.lighting < 97) {
        return 16;
    } else if (day.phaseName === "zanikający" && day.lighting >= 84 && day.lighting < 92) {
        return 17;
    } else if (day.phaseName === "zanikający" && day.lighting >= 75 && day.lighting < 84) {
        return 18;
    } else if (day.phaseName === "zanikający" && day.lighting >= 65 && day.lighting < 75) {
        return 19;
    } else if (day.phaseName === "zanikający" && day.lighting >= 50 && day.lighting < 65) {
        return 20;
    } else if (day.phaseName === "Ostatni kwartał") {
        return 21;
    } else if (day.phaseName === "zanikający" && day.lighting >= 45 && day.lighting <= 50) {
        return 22;
    } else if (day.phaseName === "zanikający" && day.lighting >= 35 && day.lighting < 45) {
        return 23;
    } else if (day.phaseName === "zanikający" && day.lighting >= 25 && day.lighting < 35) {
        return 24;
    } else if (day.phaseName === "zanikający" && day.lighting >= 16 && day.lighting < 25) {
        return 25;
    } else if (day.phaseName === "zanikający" && day.lighting >= 8 && day.lighting < 16) {
        return 26;
    } else if (day.phaseName === "zanikający" && day.lighting >= 0 && day.lighting < 8) {
        return 27;
    }
}