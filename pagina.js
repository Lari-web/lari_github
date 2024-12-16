function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Luni";
        case 2:
            return "Marți";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sâmbătă";
        case 7:
            return "Duminică";
        default:
            return "Număr invalid. Introdu un număr între 1 și 7.";
    }
}
console.log(getDayOfWeek(1));
console.log(getDayOfWeek(8);
)
