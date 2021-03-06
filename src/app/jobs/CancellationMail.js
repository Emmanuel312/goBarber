import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    console.log('A fila run');
    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}> `,
      subject: 'Agendamento cancelado',
      text: 'Você tem um novo cancelamento',
    });
  }
}

export default new CancellationMail();
