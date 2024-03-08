"""
Let's write a python program that simulates a simple car class, allowing you to create car instances, accelerate them, and display their current speeds.

Let's start by defining a Car class that includes the following attributes and methods:
Class attribute max_speed, which is set to 120 km/h.

Constructor method __init__ that takes parameters for the car's make, model, color, and an optional speed (defaulting to 0). This method initializes instance attributes for make, model, color, and speed.

Method accelerate(self, acceleration) that allows the car to accelerate. If the acceleration does not exceed the max_speed, update the car's speed attribute. Otherwise, set the speed to the max_speed.

Method get_speed(self) that returns the current speed of the car.

"""


class Car(object):

    # Class attributes (shared by all instances)
    max_speed = 120

    # Constructor method (initialize instance attributes)
    def __init__(self,make,model,color,speed=0):
        self.make = make
        self.model = model
        self.color = color
        self.speed = speed

        # Instance methods (functions)
    def accelerate(self, acceleration):
        if  (self.speed + acceleration) < self.max_speed:
            self.speed = self.speed+ acceleration
        else:
            self.speed = self.max_speed

    def get_speed(self):
        return self.speed


# Create objects (instances) of the Car class
car1 = Car("Toyota", "Camry", "Blue")
car2 = Car("Honda", "Civic", "Red")


# Accelerate the cars
car1.accelerate(30)
car1.accelerate(100)
car2.accelerate(20)


# Print the current speeds of the cars
print(f"{car1.make} {car1.model} is currently at {car1.get_speed()} km/h.")
print(f"{car2.make} {car2.model} is currently at {car2.get_speed()} km/h.")