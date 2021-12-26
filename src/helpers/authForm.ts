const getAuthFormTexts = (
  isRegisterForm: boolean,
): { title: string; formChangeText: string; buttonText: string } => {
  if (isRegisterForm) {
    const texts = {
      title: 'Зарегистрироваться',
      formChangeText: 'Уже были здесь?',
      buttonText: 'Зарегистрироваться',
    };

    return texts;
  }

  const texts = {
    title: 'Войти',
    formChangeText: 'Еще не были здесь?',
    buttonText: 'Войти',
  };

  return texts;
};

export { getAuthFormTexts };
