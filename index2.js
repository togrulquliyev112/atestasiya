class Message{
    constructor(authorname,time,text){
        this.Authorname=authorname;
        this.Time=new Date();
        this.Text=text;
       
    }
    toString() {
        console.log(`${this.Time.getHours()}:${this.Time.getMinutes()} ${this.Authorname} ${this.Text}`)
   }
}
let mesagge2=new Message()
mesagge2.toString()


class Messenger extends Message{
    constructor(authorname,text){
        super(authorname,text)
    const messages=[]
    }
    show_history() {
          this.messages.forEach(item =>{
                    console.log(item);
                 })
         }
   
         send(author, text) {
                  this.Authorname=author;
                  this.Text=text;

                   this.messages.push(`${this.Time.getHours()}:${this.Time.getMinutes()} ${this.Authorname} ${this.Text}`)

         }
         }

     let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
 messenger.send('Məryəm', 'İkinci mesaj')
 messenger.show_history()


