import { useSelector } from 'react-redux';

function FormResults() {
    const name = useSelector(state => state.name);
    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);
    const image = useSelector(state => state.image);

    return (
        <div className="container mt-4">
            <h2>Form Results</h2>
            <div className="mb-3">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Password:</strong> {password}</p>
            </div>
            <div>
                <p><strong>Image:</strong></p>
                <img src={image} className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
        </div>
    )
}

export default FormResults
