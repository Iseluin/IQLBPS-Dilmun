import React from 'react';

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-background h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-4 text-primary">SIGN IN</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justufy-center">
        <label htmlFor="email" >
          <span className='text-primary font-semibold'>Email</span>
          <input type="email" placeholder="Email" required className="rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block" />
        </label>
        <label htmlFor="password">
          <span className='text-primary font-semibold'>Password</span>
          <input type="password" placeholder="Password" required className="rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block" />
        </label>
        <button type='submit' className='bg-primary text-background py-2 rounded-md'>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
