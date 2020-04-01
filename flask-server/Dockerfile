from python:3.7

RUN apt-get update

RUN mkdir /app

WORKDIR /app

COPY . /app

# RUN pip3 --no-cache-dir install -r requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

ENTRYPOINT [ "python" ]
CMD [ "run.py" ]

