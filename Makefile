


qr_pngS:=                        \
	docs/self.png                \
	docs/zftd_mail.png           \
	docs/zftd_youtube.png

qrencode := qrencode    --level=high --8bit --size=30

all: $(qr_pngS)

self_link:=https://time.chinadsf.org/
docs/self.png : self_png.txt
	$(qrencode)    `cat $<` -o $@

docs/zftd_youtube.png : zftd_youtube.txt
	$(qrencode)    `cat $<` -o $@

docs/zftd_mail.png : zftd_mail.txt
	$(qrencode)    `cat $<` -o $@


s2 :
	cd docs/ && python3 -m http.server 33221

gs:
	git status

