export const TurfRegistrationDiv = [
    {
        label: 'Court Name',
        id: 'courtName',
        placeholder: 'Enter Court Name',
    },
    {
        label: 'Email',
        id: 'email',
        placeholder: 'Enter your email',
    },
    {
        label: 'Mobiel Number',
        id: 'mobile',
        placeholder: 'Enter your mobile number',
    },
    {
        label: 'Password',
        id: 'password',
        placeholder: 'Enter your password',
    },
    {
        label: 'Sports Event',
        id: 'event',
        placeholder: 'Select Sports Type',
    },
    {
        label: 'Loction Details',
        id: 'loction_Details',
        placeholder: 'Enter your loction_Details',
    },
]

export const initialState = {
    courtName: "", email: "", mobile: "", password: '', location: "", distric: "", state: '', event: '',
    loction_Details: "", images: []
};
export const errorState = {
    courtNameError: "", emailError: "", mobileError: "", passwordError: "",
    locationError: '', eventError: '', loction_DetailsError: "", imagesError: ""
}

export const turfProfileInitial = {
    courtName: '', loction_Details: '', Holiday: '', Price: '', enquiryNumber: '', openingTime: '', closingTime: '', images: []
}