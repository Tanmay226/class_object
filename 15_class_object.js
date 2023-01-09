// class student{
//     setDetails()
//     {
//         this.sid=101;
//         this.sname="john";
//         this.grade="A";
//             } //'this' use to set belongs to the class
            
//             display()
//             {
//                 console.log(this.sid, this.sname,this.grade);
//             }
// }
// let stu=new student();
// stu.setDetails();
// stu.display(); //101 john A
//upper three lines are used to print the value of class --- fast you after you constract a class you set a veriable that you help print value of class

// class student{
//     setDetails(sid,sname,grade)
//     {
//         this.sid=sid;
//         this.sname=sname;
//         this.grade=grade;
//             } //'this' use to set belongs to the class
            
//             display()
//             {
//                 console.log(this.sid, this.sname,this.grade);
//             }
// }
// let stu=new student();
// stu.setDetails(101,"john","A");
// stu.display(); //101 john A

class student{
    constructor(sid,sname,grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
            } //'this' use to set belongs to the class
            
            display()
            {
                console.log(this.sid, this.sname,this.grade);
            }
}
let stu=new student(101,"john","A");
// stu.setDetails(101,"john","A");
stu.display(); //101 john A
let stu1=new student(102,"david","B");
stu1.display();
let stu2=new student(103,"smith","C");
stu2.display();
let stu3=new student(104,"mary","D");
stu3.display();
// Res---->
//101 john A
// 102 david B
// 103 smith C
// 104 mary D