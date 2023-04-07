interface IUserData {
    firstName: string;
    lastName: string;
    age: number;
    hometown: string;
  }
  
  // Измените тип аргумента data в функции formatedUserData
  // таким образом чтобы ее вызов ниже не вызывал ошибку
  
  function formatedUserData(data: IUserData): string {
    return `
      Имя: ${data.firstName};
      Фамилия: ${data.lastName};
      Возраст: ${data.age};
      Родной город: ${data.hometown};
    `;
  }
  
  console.log(
    formatedUserData({
      firstName: "Амир",
      age: 25,
      hometown: "Грозный"
    })
  );
  