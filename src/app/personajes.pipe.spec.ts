import { PersonajesPipe } from './personajes.pipe';

describe('PersonajesPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonajesPipe();
    expect(pipe).toBeTruthy();
  });
});
