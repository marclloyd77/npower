import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor() {
    }

    getData() {
        return [
            {
                title: 'Some Test Content',
                image: 'http://via.placeholder.com/600x300',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tellus eu ante dapibus varius sit amet eget lacus. Sed eu nulla vestibulum libero auctor rhoncus. Aenean arcu tellus, commodo at sodales ac, gravida vitae nisl.'
            },
            {
                title: 'Some Test Content',
                image: 'http://via.placeholder.com/600x300',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tellus eu ante dapibus varius sit amet eget lacus. Sed eu nulla vestibulum libero auctor rhoncus. Aenean arcu tellus, commodo at sodales ac, gravida vitae nisl.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Some Test Content',
                image: 'http://via.placeholder.com/600x300',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tellus eu ante dapibus varius sit amet eget lacus. Sed eu nulla vestibulum libero auctor rhoncus. Aenean arcu tellus, commodo at sodales ac, gravida vitae nisl.'
            }
        ];
    }

}
