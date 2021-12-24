/*Challange:
  Write a program that will number 15 rooms starting from 1 and skipping the number 13. 
  Output to the console each room number in separate line.
  Be attentive - considering the missing number, the number of last room should be greater than the count of rooms by 1.
*/ 

const countOfRooms = 15;

    for (i=1; i <= countOfRooms + 1; i++) {
        if (i == 13){
            continue;
        } else {
            console.log(i)
        }
        
    }