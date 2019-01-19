function ratingClass(rating1) {
// let rating2 = [5, 5, 5];
    let well = 0;
    let medium = 0;
    let bad = 0;

    for (const rate of rating1) {
        if (rate >= 5) {
            well++;
        } else if (rate >= 3) {
            medium++;
        } else {
            bad++;
        }
    }
// if (rating1[1] >= 5) {
//     well++;
// }
//
// else if (rating1[1] >= 3) {
//     medium++;
// }   else {
//     bad++;
// }
//
// if (rating1[2] >= 5) {
//     well++;
// }
//
// else if (rating1[2] >= 3) {
//     medium++;
// }   else {
//     bad++;
// }
    console.log(well);
    console.log(medium);
    console.log(bad);


    let summ1 = (rating1[0] + rating1[1] + rating1[2]) / rating1.length;
    // console.log(summ1);

    if (summ1 >= 4.6) {
        console.log("Good class");
    } else if (summ1 >= 3.6) {
        console.log("Normal class");
    } else {
        console.log("bad class");
    }
    return(summ1);
}

console.log(ratingClass([5, 5, 5]));
