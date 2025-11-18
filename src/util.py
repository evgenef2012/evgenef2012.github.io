def fontSize(fntsz, res):
    font_Size = "The font size: " + (str((fntsz / res) * 100) + " vw")
    return font_Size
    
def lineHeight(fntsz):
    line_Height = "\nThe line height: " + (str((fntsz * 1.2) / fntsz) + " unitless")
    return line_Height
    
def tracking(trckprcnt):
    track = "\nThe tracking is: " + (str(trckprcnt / 100) + " em")
    return track
    
def fgmCnvrt(fntsz, res, trckprcnt):
    print(
        fontSize(fntsz, res) +
        lineHeight(fntsz) +
        tracking(trckprcnt)
    )
    
fgmCnvrt(20, 1440, -1)