#include<Servo.h>//header file for servo
#include <LiquidCrystal.h>//header file for LCD




#define enable1 10 
#define M11 11     
#define M12 12      
#define pump 13
#define flame A1
#define Gas_SENSOR A2


//RGB LED
int red_led=9;//Red terminal of RGB LED is connected to D9 of Arduino
int green_led=8;//Green terminal of RGB LED is connected to D8 of Arduino

//LCD
LiquidCrystal lcd(7, 6, 2, 3, 4, 5);//Sets the interfacing pins on Arduino that are connected to LCD
//(rs, enable, d4, d5, d6, d7)
//7-Rs,6-E(Enable), 5,4,3,2 are the inputs->4 bit mode

int repeat = 0;

void stop_fire()
{
    
   digitalWrite(pump, HIGH);
  
}

float fireAlert(){
  return map(((analogRead(flame) - 20) * 3.04), 0, 1023, -40, 125);
}

void goForward(){
  analogWrite(enable1,1000);
  digitalWrite(M11, LOW);
  digitalWrite(M12, HIGH);

}

void setup()
{
  
  
  pinMode(red_led,OUTPUT);
  pinMode(green_led,OUTPUT);
  pinMode(M11, OUTPUT);
  pinMode(M12, OUTPUT);
  pinMode(pump, OUTPUT);
  Serial.begin(9600);
  lcd.begin(16,2);//initialisation of 16*2 LCD
}

void loop()
{
  	//for buzzer and tmp36 temp sensor
 	float celsius;
    celsius = fireAlert();
 	Serial.println(celsius);
  	Serial.print(" C, ");


 	int sensor_In = analogRead(A0);
  
  	
  	if(celsius>37 || sensor_In>=45)
  	{
      repeat = 1;
      
      lcd.clear();
      lcd.setCursor(0,0);//row 0 column 0
  	  lcd.print("DANGER!!");
      lcd.setCursor(0,1);//row 1 column 0
      digitalWrite(red_led,HIGH);
      digitalWrite(green_led,LOW);
      
      delay(1000);
      digitalWrite(red_led,LOW);
      delay(400);
      goForward();
      stop_fire();

  	}
  	else{
      repeat = 0;

      digitalWrite(green_led,HIGH);
      digitalWrite(red_led,LOW);
      
  	  lcd.setCursor(0,0);//column 0 row 0
  	  lcd.print("SAFE  ");
      lcd.setCursor(6,0);//column 6 row 0
      lcd.print(celsius);
      lcd.print("C");
      digitalWrite(pump, LOW);
      analogWrite(enable1,0);cd b

      

  }
  
}
float getVoltage(int pin)
{
  
  return (analogRead(pin) * 0.004882814);
}