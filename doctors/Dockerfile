FROM python:3.10.13-alpine

WORKDIR /app

EXPOSE 8080

RUN pip install flask

COPY app.py ./

CMD [ "python", "./app.py" ]