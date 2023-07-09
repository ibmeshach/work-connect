

export async function clickHandlerEmployer() {
    const user_url = 'http://localhost:8000/api/users/latest/';
    const employer_url = 'http://localhost:8000/api/register-employer/';

    const user_response = await fetch(user_url);
    const user_data = await user_response;
    const user_json = await user_data.json();
    console.log(user_json);


    // const employer_response  = await fetch(employer_url, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(user_json)
    // });
    // const employer_data = await employer_response;


}
