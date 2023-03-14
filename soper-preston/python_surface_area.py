def get_size(w,h,d):
    #your code here
    area = 2 * (d * w + d * h + w * h)
    volume = d * w * h
    return [area,volume]