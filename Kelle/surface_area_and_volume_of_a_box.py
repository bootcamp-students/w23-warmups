def get_size(w,h,d):
    #area =  volume = w * h * d
    area = (2 * (d * w)) + (2 * (d * h)) + (2 * (w * h))
    volume = (w * h * d)
    answer = [area, volume]
    return(answer)