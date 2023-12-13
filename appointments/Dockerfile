FROM python:3.10.13-alpine

WORKDIR /app

EXPOSE 7070

RUN pip install flask

COPY app.py ./

CMD [ "python", "./app.py" ]