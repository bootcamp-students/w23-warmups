def get_size(w,h,d):
    #your code here
    
    print(w,h,d)
    surface_area = 2 * (w * h + w * d + h * d)
    volume = w * h * d
    print("Surface Area: %d, Volume: %d" % (surface_area, volume))
    return [surface_area, volume]