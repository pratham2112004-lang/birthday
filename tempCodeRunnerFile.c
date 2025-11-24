#include<stdio.h>
#include<conio.h>

int main()
{
    char first_str[]="anmol";
    char second_str[]="Anmol";

    printf("first_str:%s\n",first_str);
    printf("second_str:%s\n",second_str);
    int i=0, sum_ascii=0;
    while(first_str[i]!='\0')
    {
        printf("character:%c, ASCII value:%d\n",first_str[i],(int)first_str[i]);
        sum_ascii += (int)first_str[i];
        i++;
    }
    printf("\n"); 
    
    i=0;
    while(second_str[i]!='\0')
    {
        printf("character:%c, ASCII value:%d\n",second_str[i],(int)second_str[i]);
        sum_ascii += (int)second_str[i];
        i++;
    }
    printf("Sum of all ASCII values: %d\n", sum_ascii);
    return 0;
}