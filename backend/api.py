from fastapi import FastAPI
import numpy as np

app = FastAPI()

class Neuron:
    def __init__(self, threshold=1.5, decay=0.2):
        self.potential = 0.0
        self.threshold = threshold
        self.decay = decay
    
    def receive_pulse(self, input_signal: float):
        self.potential += input_signal
        if self.potential >= self.threshold:
            self.potential = 0  # Reset nach Feuern
            return {"status": "fire", "potential": self.potential}
        self.potential *= (1 - self.decay)
        return {"status": "idle", "potential": round(self.potential, 3)}

neuron = Neuron()

@app.get("/pulse")
def get_pulse():
    input_signal = np.random.uniform(0.3, 0.7)
    response = neuron.receive_pulse(input_signal)
    return response