
export const clickHandlerEmployee = async () => {

    const user_url = 'http://localhost:8000/api/users/latest/';
    const employee_url = 'http://localhost:8000/api/register-employer/';

    const user_response = await fetch(user_url);
    const user_data = await user_response;
    const user_json = await user_data.json();

    if (user_data.status === 200) {
        const employee_response = fetch(employee_url, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user_json)
        })

        const employee_data = await employee_response;
        const employee_json_data = await employee_response.json();

        if (employee_data.status === 201) {
            console.log(employee_json_data);
        } else {
            console.log(employee_data.error);
        }
    } else {
        console.log(user_data.error);
    }
}
