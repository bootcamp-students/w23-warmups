def get_size(w,h,d):
    area = 2 * d * w + 2 * d * h + 2 * w * h
    volume = w * h * d
    solution = [area, volume]
    return solution


# Formula for finding surface area of rectangle
    #(SA)=2lw+2lh+2hw.
# Formula tailored to our function
    #(SA)=2dw+2dh+2hw.
