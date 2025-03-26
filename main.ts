basic.forever(function () {
    if (40 < PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        neZha.setServoSpeed(neZha.ServoList.S1, -30)
        neZha.setServoSpeed(neZha.ServoList.S2, 0)
        basic.pause(1000)
    } else if (40 < PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        neZha.setServoSpeed(neZha.ServoList.S1, 0)
        neZha.setServoSpeed(neZha.ServoList.S2, 30)
        basic.pause(1000)
        neZha.setServoSpeed(neZha.ServoList.S1, -30)
        neZha.setServoSpeed(neZha.ServoList.S1, -30)
        basic.pause(1000)
    } else {
        neZha.setServoSpeed(neZha.ServoList.S1, -30)
        neZha.setServoSpeed(neZha.ServoList.S2, 30)
    }
})
