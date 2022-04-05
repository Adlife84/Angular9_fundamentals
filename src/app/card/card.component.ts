import { Component, Input, OnInit } from '@angular/core'
import { Card } from '../app.component'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    // interpolation: ['{{', '}}']

    // template: `
    // <div class="card">
    //     <h2>Card component</h2>
    //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, ipsa.</p>
    // </div>
    // `,
    // styles: [
    //     `.card {
    //         padding: .5rem 1rem;
    //         border: 1px dashed #ccc;
    //         margin-bottom: 1rem;
    //     }
        
    //     h2 {
    //         margin-bottom: .5rem;
    //     }`
    // ]
})
export class CardComponent implements OnInit {

    @Input() card!: Card
    @Input() index!: number
 
    title: string = 'My Card Title'
    text: string = 'My sample text'
    cardDate: Date = new Date()

    textColor: string = 'white'
    
    number = 42

    array = [1, 2, 3, 5, 8, 13]

    obj = {name: 'Andrei', info: {age: 38, occupation: 'Frontend Developer' }}

    disabled = false

    imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg'

    ngOnInit(): void {
        console.log('ng-onInit')
        setTimeout(() => {
            this.imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
            this.disabled = true
        }, 3000)
    }

    changeTitle() {
        this.card.title = 'Title has been changed!'
    }

    inputHandler(event: any) {
        console.log(event.target.value)
        const value = event.target.value
        this.card.title = value
    }

    inputHandlerByLink(value: any) {
        console.log(value)
        this.card.title = value
    }

    changeHandler() {
        console.log("changeHandler", this.text)
    }

    getInfo(): string {
        return 'This is my info'
    }
} 