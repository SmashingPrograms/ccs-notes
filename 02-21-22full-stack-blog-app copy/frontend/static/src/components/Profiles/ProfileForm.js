import { useState } from 'react';
import Cookies from 'js-cookie';

function ProfileForm() {
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState('');

  const handleImage = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    }
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', avatar)

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    };

    fetch('/api/v1/profiles/', options);
  }

  return (
    <>
      <div className="row justify-content-center mt-3">
        <form className="col-6" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="file" name="avatar" onChange={handleImage} />
            {preview && <img src={preview} alt="preview" />}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;