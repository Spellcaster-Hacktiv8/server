
class Controller {
    static read(req, res) {

     return res.status(200).json(
        [
            {
                q1: 'Is this an emergency ?',
                description: ['Severe, constant chest pain or pressure', 'Extreme difficulty breathing','Severe, constant lightheadedness','Serious disorientation or unresponsiveness'],
                answer: ['Im expreciencing at least one of these', 'I do not any of these']
            },
            {
                q2: 'How old are you',
                description: 'select to apply',
                answer: ['Under 18', '18 or older']
            },
            {
                q3: 'Have you recently started experiencing any of these symptoms ?',
                description: ['Fever or chills','Mild or moderate difficulty breathing', 'New or worsening cough', 'Sustained loss of smell, taste, or appetite', 'sore throat','etc'],
                answer: ['YES', 'None of the above']
            },
            {
                q4: 'Have you recently started experiencing any of these symptoms ?',
                description: ['Fever or chills','Mild or moderate difficulty breathing', 'New or worsening cough', 'Sustained loss of smell, taste, or appetite', 'sore throat','etc'],
                answer: ['YES', 'None of the above']
            },
            {
                q5: 'Do any of these apply to you ?',
                description: ['Cancer Threatment or medicines causing immune suppression', 'inherited immune system or HIV', 'Serious heart condition', 'Pregnancy', 'etc'],
                answer: ['YES', 'None of the above']
            },
            {
                q6: 'In the last 14 days, have you traveled internationally',
                description: [''],
                answer: ['I have traveled internationally', 'I have not traveled internationally']
            },
            {
                q7: 'In the last 14 days, have you been in an area where COVID-19 is widwspread ?',
                description: [''],
                answer: ['I Live in an area where Covid-19 is widespread', 'None of above']
            },
            {
                q8: 'In the last 14 days, what is your exposure to others who are known to have COVID-19 ?',
                description: [''],
                answer: ['I have been near someone who has COVID-19', 'I have no exposure']
            },
            {
                q9: 'Do you live in a long-term care facility',
                description: ['This includes homes or assisted living facilities'],
                answer: ['I live in a long-term care facility', 'I don`t live in a long-term care facility']
            }
        ]
    )

    }

    static result(req, res){

    }
}

module.exports = Controller