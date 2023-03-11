import axios from 'axios';

const API_URL = 'http://localhost:8080';

class UserService {
    /* Question */
    addNewQuestion(user, title, question, selection) {
        return axios.post(API_URL + '/api/questions/', {
            userId: user.id,
            titleQuestion: title,
            contentQuestion: question,
            ue: selection
          })
    }
    getQuestion(id) {
       return axios.get(API_URL + `/api/question/${id}`);
    }

    getAllquestions() {
        return axios.get(API_URL + '/api/questions');
    }

    // deleteQuestion() {
    //     return axios.get(API_URL + 'admin');
    // }


    /* REPONSE */
    addResponse(user,_questionId,content) {
        return axios.post(API_URL + '/api/responses/', {
            userId: user.id,
            questionId: _questionId,
            contentResponse: content,
        })
    }
    getAllResponse(){
        return axios.get(API_URL + '/api/responses');
    }

    /* SHARE */
    Share(user, title, content, selection) {
        return axios.post(API_URL + '/api/questions/', {
            userId: user.id,
            titleQuestion: title,
            contentQuestion: content,
            ue: selection
          })
    }
    getAllSharing(){
        
    }

}

export default new UserService();
