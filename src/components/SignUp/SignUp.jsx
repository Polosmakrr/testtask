import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPositions, postUser } from '../../redux/operations';
import * as actions from '../../redux/actions';
import { toast, ToastContainer } from 'react-toastify';
import SuccesImg from '../../picture/svg/success-image.svg';

const SignUp = () => {
  const dispatch = useDispatch();
  const positions = useSelector(state => state.data.positions[0]);
  const response = useSelector(state => state.data.postResponse);
  const navigate = useNavigate();
  const { signUp } = document.forms;
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [radio, setRadio] = useState([]);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    dispatch(fetchPositions());
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const { name, email, phone, position_id, photo } = signUp;
    const values = {
      position_id: position_id.value,
      name: name.value,
      emali: email.value,
      phone: phone.value,
      photo: photo.files[0],
    };

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.emali);
    formData.append('phone', values.phone);
    formData.append('position_id', parseInt(values.position_id));
    formData.append('photo', values.photo);

    window.AgencyAxios.get('/token')
      .then(({ data }) => dispatch(postUser(formData, data.token)))
      .catch(error => error);
  };

  useEffect(() => {
    if (response.status === 409) {
      toast.error('User with this phone or email already exist');
    }
    if (response.status === 422) {
      toast.error('Check your entrance data');
    }
    if (response.status === 201) {
      setTimeout(() => {
        window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' });
      }, 500);
      toast.success('Users was added!');
      setTimeout(() => {
        dispatch(actions.clearResponse());
        navigate('/testtask/users');
      }, 3000);
    }
  }, [response]);

  const check = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'phone') {
      setPhone(value);
    }

    if (name === 'position_id') {
      setRadio(value);
    }

    if (name === 'photo') {
      setPhoto(value);
    }
  };

  if (
    name.length !== 0 &&
    email.length !== 0 &&
    phone.length !== 0 &&
    radio.length !== 0 &&
    photo.length !== 0
  ) {
    document.querySelector('#submit').disabled = false;
  }

  return (
    <section className="container">
      <div className="signup_container">
        <h2 className="signup_title">Working with POST request</h2>
        <form className="signup_form" method="POST" id="signUp" onSubmit={onSubmit}>
          <input
            className="signup_input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            minLength={2}
            maxLength={60}
            title="Username should contain 2-60 characters and contain only letters, apostrophe, dash and spaces."
            placeholder="Your Name"
            onChange={check}
            required
          />
          <input
            className="signup_input"
            type="email"
            name="email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            minLength={2}
            maxLength={100}
            title="Email myst be a string and separated into two parts by @ symbol. a personal_info and a domain, that is personal_info@domain."
            placeholder="Email"
            onChange={check}
            required
          />
          <input
            className="signup_input"
            type="tel"
            name="phone"
            pattern="^[\+]{0,1}380([0-9]{9})$)"
            title="Number should start with code of Ukraine +380 and must be digits and can contain spaces, dashes."
            placeholder="Phone"
            onChange={check}
            required
          />
          <div className="signup_select">
            <p className="signup_select_title">Select your position</p>
            <ul className="signup_select_list list">
              {positions &&
                positions.positions.map(item => (
                  <li className="signup_select_list-item" key={item.id}>
                    <input
                      className="signup_select_list-input"
                      type="radio"
                      id={item.id}
                      name="position_id"
                      value={item.id}
                      onChange={check}
                      required
                    />
                    <label className="signup_select_list-label" for={item.id}>
                      {item.name}
                    </label>
                  </li>
                ))}
            </ul>
          </div>

          <div className="signup_load_img">
            <label className="signup_load_img-label" for="file-input">
              Upload
            </label>
            <input
              className="signup_load_img-input"
              for="file-input"
              value={photo.length !== 0 ? '...' + photo.split('\\').pop() : 'Upload your photo'}
              disabled
            />
            <input
              id="file-input"
              type="file"
              title="Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb."
              name="photo"
              required
              onChange={check}
            />
          </div>
          <div className="signup_buttons">
            <button className="btn" type="submit" id="submit" disabled>
              Sign up
            </button>
          </div>
        </form>
      </div>
      {response.status === 201 && <img style={{ margin: 'auto' }} src={SuccesImg} alt="success" />}
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default SignUp;
