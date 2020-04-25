 // validate() {
  //   const { user } = this.state;
  //   let errorFirstname = '';
  //   let errorLastname = '';
  //   // let errorPhone = '';
  //   let errorPassword = '';

  //   if (!user.firstname) {
  //     errorFirstname = 'Name is missing!';
  //   } else if (user.firstname.length < 3) {
  //     errorFirstname = 'Name cannot be less than 3 characters!';
  //   }

  //   if (!user.lastname) {
  //     errorLastname = 'Lastname is missing!';
  //   } else if (user.lastname.length < 3) {
  //     errorLastname = 'Lastname cannot be less than 3 characters!';
  //   }

  //   if (!user.password) {
  //     errorPassword = 'Password is missing!';
  //   } else if (user.password.length < 6) {
  //     errorPassword = 'Password cannot be less than 6 characters!';
  //   }

  //   if (errorFirstname || errorLastname || errorPassword) {
  //     this.setState({
  //       user: {
  //         ...user,
  //         errorFirstname,
  //         errorLastname,
  //         // errorPhone,
  //         errorPassword
  //       }
  //     });
  //     return false;
  //   }

  //   return true;
  // }


  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { user } = this.state;
  //   const isValid = this.validate();
  //   if (isValid) {
  //     console.log(user);
  //     // clear form
  //     this.setState({
  //       user: {
  //         firstname: '',
  //         lastname: '',
  //         phoneNumber: '',
  //         password: '',
  //         errorFirstname: '',
  //         errorLastname: '',
  //         errorPhone: '',
  //         errorPassword: ''
  //       },
  //       submitted: true
  //     });
  //   }
    // if (user.firstname && user.lastname && user.phoneNumber && user.password) {
    //   this.props.register(user);
    // }