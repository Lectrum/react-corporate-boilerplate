// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = {
    id:     '123',
    author: {
        id:   '1',
        name: 'Paul',
    },
    title:    'My awesome blog post',
    comments: [
        {
            id:        '324',
            commenter: {
                id:   '2',
                name: 'Nicole',
            },
        }
    ],
};

// Объявление схем

// Нормализированные выходные данные
