// Temperature Status

let Temperature = 36;
{

    if (Temperature < 0) {
        result = "Freezing";
    }
    else if (Temperature >= 0 && Temperature <= 20) {
        result = "cold";
    }
    else if (Temperature >= 21 && Temperature <= 35) {
        result = "moderate"
    }
    else if (Temperature > 35) {
        result = "hot";
    }
    else {
        result = "invalid Temperture"
    }
    console.log(result)
}


