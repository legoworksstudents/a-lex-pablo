basic.forever(function () {
    if (30 < PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        neZha.setServoSpeed(neZha.ServoList.S1, 30)
        neZha.setServoSpeed(neZha.ServoList.S2, -30)
    } else if (30 < PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        neZha.setServoSpeed(neZha.ServoList.S1, -30)
        neZha.setServoSpeed(neZha.ServoList.S2, 30)
    } else {
        neZha.setServoSpeed(neZha.ServoList.S1, 30)
        neZha.setServoSpeed(neZha.ServoList.S2, 30)
    }
})
