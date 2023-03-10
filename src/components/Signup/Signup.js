import { useState, useContext, useEffect } from 'react';
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import UserContext from '../../UserContext';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
        navigate('/dashboard'); // redirect to dashboard after successful login
      }
    });

    return unsubscribe;
  }, [navigate, setUser]);

  const handleSignUp = async (event) => {
    event.preventDefault();
    // handle form submission
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User account created successfully!', userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error('Error creating user account', error);
    }
  };

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                  <p className="text-white-50 mb-5">Please enter your email and password!</p>
                  {error && <div className="text-danger mb-3">{error}</div>}
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typeConfirmPasswordX" className="form-control form-control-lg" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} onKeyDown={(event) => {if (event.key === 'Enter') handleSignUp(event)}} />
                    <label className="form-label" htmlFor="typeConfirmPasswordX">Confirm Password</label>
                  </div>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSignUp} >Sign up</button>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div>
                </div>
                <div>
                  <p className="mb-0">Already have an account? <Link href="#!" className="text-white-50 fw-bold" to="/Login">Log in</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
