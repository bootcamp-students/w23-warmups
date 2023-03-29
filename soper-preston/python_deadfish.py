def parse(data):
    # TODO: your code here
    # Make an empty list to append the output to
    output = []
    # Set initial value to 0
    value = 0
    # Loop through data characters
    for char in data:
        # increment for i
        if char == "i":
            value += 1
        # decrement for d
        elif char == "d":
            value -= 1
        # square for s
        elif char == "s":
            value *= value
        # append value to the list for o
        elif char == "o":
            output.append(value)
    # return the list