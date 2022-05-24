import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPositions, postUser } from '../../redux/operations';

const SignUp = () => {
  const dispatch = useDispatch();
  const positions = useSelector(state => state.data.positions[0]);
  const { signUp } = document.forms;

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

    const param = Object.fromEntries(formData.entries());
    console.log('param:', param);

    axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';
    let token = '';
    axios
      .get(`/token`)
      .then(({ data }) => {
        console.log('TOKEN:', data.token);
        return (token = data.token);
      })

      .catch(error => error);

    setTimeout(() => {
      dispatch(postUser(formData, token));
    }, 500);
  };

  return (
    <section className="container">
      <div className="signup_container">
        <h2 className="signup_title">Working with POST request</h2>
        <form className="signup_form" action="/" method="POST" id="signUp" onSubmit={onSubmit}>
          <input
            className="signup_input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            minLength={2}
            maxLength={60}
            title="Username should contain 2-60 characters and contain only letters, apostrophe, dash and spaces."
            placeholder="Your Name"
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
            required
          />
          <input
            className="signup_input"
            type="tel"
            name="phone"
            pattern="^[\+]{0,1}380([0-9]{9})$)"
            title="Number should start with code of Ukraine +380 and must be digits and can contain spaces, dashes."
            placeholder="Phone"
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
              {' '}
              Upload{' '}
            </label>
            <input
              className="signup_load_img-input"
              for="file-input"
              placeholder="Upload your photo"
              disabled
            />
            <input
              id="file-input"
              type="file"
              title="Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb."
              name="photo"
            />
          </div>
          <div className="signup_buttons">
            <button className="btn" type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
