huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
                basic.showIcon(IconNames.Yes)
                basic.pause(2000)
                basic.clearScreen()
                music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(2000)
                basic.clearScreen()
                music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
            }
        }
    }
})
